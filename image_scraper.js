// Import necessary libraries
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const url = require('url');

// --- Configuration ---
const baseUrl = 'https://stertups.net/';
const downloadDir = 'images';

// --- Crawler State ---
// Use Sets for efficient checking of visited URLs
const visitedUrls = new Set();
// A queue of URLs to visit, now pre-populated with the specified pages
const urlsToVisit = [
    baseUrl,
    'https://stertups.net/services',
    'https://stertups.net/about'
]; 

// --- Main Crawler Function ---
async function crawlSite() {
    console.log(`Starting crawl for base URL: ${baseUrl}`);

    // 1. Create the download directory if it doesn't exist
    if (!fs.existsSync(downloadDir)) {
        fs.mkdirSync(downloadDir);
        console.log(`Created directory: ./${downloadDir}`);
    }

    // 2. Loop as long as there are pages to visit
    while (urlsToVisit.length > 0) {
        // Get the next URL from the front of the queue
        const currentUrl = urlsToVisit.shift();

        // Skip if we've already visited this URL
        if (visitedUrls.has(currentUrl)) {
            continue;
        }

        // Add to visited set to prevent re-crawling
        visitedUrls.add(currentUrl);
        console.log(`\n--- Scraping Page: ${currentUrl} ---`);

        try {
            // 3. Fetch the HTML of the current page
            const response = await axios.get(currentUrl, {
                headers: { 'User-Agent': 'ImageScraper/1.0' } // Be a good web citizen
            });
            const html = response.data;
            const $ = cheerio.load(html);

            // 4. Find and download all images on the current page
            await downloadImagesFromPage($, currentUrl);

            // 5. Find all links and add new ones to the queue
            $('a').each((index, element) => {
                const link = $(element).attr('href');
                if (link) {
                    // Resolve the link to a full URL
                    const absoluteLink = new URL(link, baseUrl).href;
                    
                    // Check if the link is on the same domain and not yet visited/queued
                    if (absoluteLink.startsWith(baseUrl) && !visitedUrls.has(absoluteLink) && !urlsToVisit.includes(absoluteLink)) {
                        console.log(`   -> Found new link: ${absoluteLink}`);
                        urlsToVisit.push(absoluteLink);
                    }
                }
            });

        } catch (error) {
            console.error(`Failed to scrape ${currentUrl}: ${error.message}`);
        }
    }

    console.log('\n--- Crawl Complete! ---');
    console.log(`Visited ${visitedUrls.size} pages.`);
}

// --- Helper function to download images from a single page ---
async function downloadImagesFromPage($, pageUrl) {
    const imageTags = $('img');
    console.log(`Found ${imageTags.length} image tags on this page.`);

    for (const element of imageTags.toArray()) {
        const imgSrc = $(element).attr('src');
        if (!imgSrc) continue;

        try {
            // Resolve the image URL to a full path
            const fullImgUrl = new URL(imgSrc, pageUrl).href;

            // Create a unique, safe filename from the image URL
            const filename = path.basename(new URL(fullImgUrl).pathname);
            if (!filename || filename.length < 3) continue; // Skip empty or weird filenames
            
            const savePath = path.join(downloadDir, filename);

            // Skip if file already exists
            if (fs.existsSync(savePath)) {
                // console.log(`   -> Skipping already downloaded: ${filename}`);
                continue;
            }
            
            // Download the image file
            const imgResponse = await axios.get(fullImgUrl, { responseType: 'stream' });
            const writer = fs.createWriteStream(savePath);
            imgResponse.data.pipe(writer);

            await new Promise((resolve, reject) => {
                writer.on('finish', () => {
                    console.log(`   -> Successfully downloaded: ${filename}`);
                    resolve();
                });
                writer.on('error', (err) => {
                    console.error(`   -> FAILED to write file: ${filename}`, err);
                    reject();
                });
            });

        } catch (downloadError) {
            // console.error(`   -> FAILED to download image from: ${imgSrc.substring(0, 50)}...`);
        }
    }
}


// --- How to Run ---
// Before running, you need to install the required packages:
// In your terminal, run: npm install axios cheerio
// Then, run this script with: node your_script_name.js

// Execute the main function
crawlSite();
