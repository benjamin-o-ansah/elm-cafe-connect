import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface StepsGuideProps {
  title: string;
  steps: Step[];
}

const StepsGuide = ({ title, steps }: StepsGuideProps) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-muted mb-8 text-center">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <Card key={step.number} className="border-border hover:shadow-lg transition-all animate-fade-in-up">
            <CardContent className="pt-6 text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StepsGuide;
