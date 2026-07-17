// import Badge from "@/components/ui/Badge";
// import Button from "@/components/ui/Button";
// import Card from "@/components/ui/Card";
// import Heading from "@/components/ui/Heading";
// import Section from "@/components/ui/Section";

// export default function Home() {
//   return (
//     <main>
//       <Section>
//         <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
//           <Badge>Available for Opportunities</Badge>

//           <Heading
//             subtitle="Software Engineer"
//             title="Musfiqur Shakib"
//             align="center"
//           />

//           <Card>
//             <p className="text-zinc-300">
//               Building enterprise software, AI-powered applications, and scalable
//               digital platforms.
//             </p>
//           </Card>

//           <Button>View Projects</Button>
//         </div>
//       </Section>
//     </main>
//   );
// }



import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32" />
    </>
  );
}