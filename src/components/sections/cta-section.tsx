"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { aiDealFinder } from "@/ai/ai-deal-finder";
import { useToast } from "@/hooks/use-toast";

export function CtaSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    const useCase = formData.get("use-case") as string;
    const budget = formData.get("budget") as string;
    const brand = formData.get("brand") as string;

    try {
      const response = await aiDealFinder({ useCase, budget, brand });
      setResult(response.recommendation);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "There was an error finding a deal. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="cta" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-2xl shadow-primary/10 border-primary/20 bg-background">
          <CardHeader className="text-center p-6">
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Find Your Perfect Deal</CardTitle>
            <CardDescription className="mt-2 text-lg text-muted-foreground">
              Let our AI assistant help you find the best computer for your needs and budget.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="use-case">Primary Use Case</Label>
                <Select name="use-case" defaultValue="work" required>
                  <SelectTrigger id="use-case">
                    <SelectValue placeholder="Select a use case" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="work">Work / Productivity</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="creative">Creative (Video/Photo)</SelectItem>
                    <SelectItem value="school">School / Everyday Use</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="budget">Maximum Budget ($)</Label>
                <Input id="budget" name="budget" type="number" placeholder="e.g., 1200" />
              </div>

              <div>
                <Label htmlFor="brand">Preferred Brand</Label>
                <Select name="brand" defaultValue="any">
                  <SelectTrigger id="brand">
                    <SelectValue placeholder="Any Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Brand</SelectItem>
                    <SelectItem value="dell">Dell</SelectItem>
                    <SelectItem value="hp">HP</SelectItem>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="lenovo">Lenovo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2 text-center">
                <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Find My Deal
                </Button>
              </div>
            </form>
            {result && (
              <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <h4 className="font-semibold text-primary">Our Recommendation:</h4>
                <p className="mt-2 text-foreground">{result}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
