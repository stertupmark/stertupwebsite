"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';

const pricingData = {
  gworkspace: {
    businessStarter: 6,
    businessStandard: 12,
    businessPlus: 18,
  },
  competitor: {
    office365: {
      businessBasic: 6,
      businessStandard: 12.50,
      businessPremium: 22,
    },
  },
};

export default function GoogleWorkspaceCalculator() {
  const { language } = useLanguage();
  const t = translations[language].servicesPage.items.gworkspace; // Using existing translations for now
  const [employees, setEmployees] = useState(50);
  const [gworkspacePlan, setGworkspacePlan] = useState('businessStandard');
  const [competitorPlan, setCompetitorPlan] = useState('businessStandard');

  const gworkspaceCost = pricingData.gworkspace[gworkspacePlan as keyof typeof pricingData.gworkspace] * employees;
  const competitorCost = pricingData.competitor.office365[competitorPlan as keyof typeof pricingData.competitor.office365] * employees;
  const savings = competitorCost - gworkspaceCost;

  return (
    <section id="gworkspace-calculator" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">Cost Savings Calculator</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            See how much you can save by switching to Google Workspace.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Calculator</CardTitle>
            <CardDescription>
              Adjust the number of employees and select plans to see the potential savings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="employees" className="font-medium">
                  Number of Employees
                </label>
                <span className="text-2xl font-bold">{employees}</span>
              </div>
              <Slider
                id="employees"
                min={1}
                max={500}
                step={1}
                value={[employees]}
                onValueChange={(value) => setEmployees(value[0])}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Google Workspace</h3>
                <Select value={gworkspacePlan} onValueChange={setGworkspacePlan}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="businessStarter">Business Starter</SelectItem>
                    <SelectItem value="businessStandard">Business Standard</SelectItem>
                    <SelectItem value="businessPlus">Business Plus</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-4xl font-bold text-center py-4">
                  ${gworkspaceCost.toFixed(2)}
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Microsoft 365</h3>
                <Select value={competitorPlan} onValueChange={setCompetitorPlan}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="businessBasic">Business Basic</SelectItem>
                    <SelectItem value="businessStandard">Business Standard</SelectItem>
                    <SelectItem value="businessPremium">Business Premium</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-4xl font-bold text-center py-4">
                  ${competitorCost.toFixed(2)}
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <h3 className="text-2xl font-bold">
                Potential Annual Savings:
              </h3>
              <div className="text-5xl font-extrabold text-primary mt-2">
                ${(savings * 12).toFixed(2)}
              </div>
              <p className="text-muted-foreground mt-2">
                by choosing Google Workspace
              </p>
              <Button size="lg" className="mt-6">
                Start Saving Today
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
