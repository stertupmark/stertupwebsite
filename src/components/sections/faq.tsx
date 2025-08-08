"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";
import { answerQuestion } from "@/ai/flows/ai-powered-faq";
import { Loader2, Sparkles } from "lucide-react";

export default function Faq() {
  const { language } = useLanguage();
  const t = translations[language].faq;
  const [aiAnswer, setAiAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [askedQuestion, setAskedQuestion] = useState("");

  const formSchema = z.object({
    question: z.string().min(10, { message: t.validation.question }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { question: "" },
  });

  const handleAskQuestion = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setAiAnswer("");
    setAskedQuestion(values.question);
    try {
      const result = await answerQuestion({ question: values.question });
      setAiAnswer(result.answer);
    } catch (error) {
      console.error("Error fetching AI answer:", error);
      setAiAnswer(t.error);
    } finally {
      setIsLoading(false);
      form.reset();
    }
  };

  const preDefinedQuestions = Object.keys(t.questions);

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">{t.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-headline font-semibold mb-4">{t.commonQuestions}</h3>
            <Accordion type="single" collapsible className="w-full">
              {preDefinedQuestions.map((qKey) => (
                <AccordionItem key={qKey} value={qKey}>
                  <AccordionTrigger>{t.questions[qKey].q}</AccordionTrigger>
                  <AccordionContent>{t.questions[qKey].a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <h3 className="text-2xl font-headline font-semibold mb-4">{t.askAi}</h3>
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleAskQuestion)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="question"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder={t.placeholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {t.loading}
                        </>
                      ) : (
                        t.submit
                      )}
                    </Button>
                  </form>
                </Form>
                {(isLoading || aiAnswer) && (
                  <div className="mt-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-2 pb-2">
                           <Sparkles className="h-5 w-5 text-primary"/>
                           <CardTitle className="text-lg font-headline">{askedQuestion}</CardTitle>
                        </CardHeader>
                      <CardContent>
                        {isLoading ? (
                           <div className="space-y-2">
                            <div className="bg-muted animate-pulse h-4 w-full rounded-md"></div>
                            <div className="bg-muted animate-pulse h-4 w-3/4 rounded-md"></div>
                           </div>
                        ) : (
                          <p className="text-sm text-foreground">{aiAnswer}</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
