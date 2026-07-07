type Props = {
  title: string;
  color: string;
};

export default function TitleSection({ title, color }: Props) {
  return (
    <div>
      <section>
        <h1
          className={`text-6xl font-extrabold  text-gray-700 text-center  ${color}`}
        >
          {title}
        </h1>
      </section>
    </div>
  );
}
