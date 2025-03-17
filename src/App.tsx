import Card from "./components/Card";
import teamBuilder from "./assets/images/icon-team-builder.svg";
import calculator from "./assets/images/icon-calculator.svg";
import karma from "./assets/images/icon-karma.svg";
import supervisor from "./assets/images/icon-supervisor.svg";

function App() {
  const myCards = [
    {
      title: "Supervisor",
      description: "Monitors activity to identify project roadblocks",
      img: supervisor,
      color: "#44D3D2",
    },
    {
      title: "Team Builder",
      description:
        "Scans our talent network to create the optimal team for your project",
      img: teamBuilder,
      color: "#EA5454",
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      img: karma,
      color: "#FCAE4A",
    },
    {
      title: "Calculator",
      description:
        "Uses data from past projects to provide better delivery estimates",
      img: calculator,
      color: "#549EF2",
    },
  ];
  return (
    <>
      <header className="w-full md:max-w-10/12 !my-20 !mx-auto text-[#6a7178] relative text-center items-center font-[Poppins]">
        <h1 className="text-[3rem] leading-[140%] tracking-[.25px] font-extralight">
          Reliable, efficent delivery
        </h1>
        <h1 className="text-[3rem] text-[#4d4f62] leading-[140%] tracking-[.25px] font-semibold">
          Powered by Technology
        </h1>
        <p className="w-full md:w-2/5 !mx-auto text-[1.25rem] leading-[140%] !my-[1rem]">
          Our Artificial Intelligence powered tools use millons of project data
          points to ensure that your project is successful
        </p>
      </header>
      <main className="w-full  flex items-center justify-center">
        <section className="flex flex-wrap items-center justify-center gap-10">
          <div className="w-full flex justify-center xl:w-auto">
            <Card key={myCards[0].title} data={myCards[0]} />
          </div>
          <div className="flex justify-center xl:flex-col flex-wrap  gap-10">
            <Card key={myCards[1].title} data={myCards[1]} />
            <Card key={myCards[2].title} data={myCards[2]} />
          </div>
          <div className="w-full flex justify-center xl:w-auto">
            <Card key={myCards[3].title} data={myCards[3]} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
