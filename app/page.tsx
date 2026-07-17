import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main>
      <Section>
        <div className="flex flex-col items-center gap-8">
          <Heading
            subtitle="Software Engineer"
            title="Musfiqur Shakib"
            align="center"
          />

          <Button>View Projects</Button>
        </div>
      </Section>
    </main>
  );
}