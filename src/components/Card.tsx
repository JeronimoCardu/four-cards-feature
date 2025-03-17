import styled from "./Card.module.css"

type Props = {
  data: {
    title: string;
    description: string;
    img: string;
    color: string;
  };
};

function Card({ data }: Props) {
  return (
    <div
      className={`${styled.myShadow} w-[30rem] h-[22rem] rounded-[8px] border-t-4 !p-[2.5rem] grid grid-rows-2 bg-[#ffffff    ]`}
      style={{ borderTopColor: data.color }}
    >
      <header>
        <h1 className="text-gray-500 text-[1.66rem] font-[Poppins] font-semibold leading-[140%]">
          {data.title}
        </h1>
        <p className="text-gray-400 text-[1.08rem]">{data.description}</p>
      </header>
      <img className="flex justify-self-end" src={data.img} alt={data.title} />
    </div>
  );
}

export default Card;
