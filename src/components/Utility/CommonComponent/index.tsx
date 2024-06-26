import CustomButton from "@/components/elements/CustomButton";

interface QuestionsSectionProps {
  title: any;
  description?: string;
  imageUrl?: string;
  buttonText: string;
}

export const QuestionsSection: React.FC<QuestionsSectionProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
}) => {
  return (
    <section className="flex justify-center items-center px-8 md:px-16 py-8 md:py-14 text-center text-black bg-[linear-gradient(126deg,#C1EBF3_0%,#E4D0F4_100%)] rounded-[32px] max-md:px-5">
      <div className="flex flex-col items-center max-w-full w-[716px]">
        <h2 className=" text-3xl md:text-4xl font-semibold max-md:max-w-full">{title}</h2>
        {description && (
          <p className="self-stretch mt-6 text-xl max-md:max-w-full">
            {description}
          </p>
        )}
        {imageUrl && (
          <img
            loading="lazy"
            src={imageUrl}
            alt="Support team"
            className="mt-8 max-w-full rounded-full aspect-[2.44] w-[118px]"
          />
        )}
        <div className=" mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3">
          <div className=""></div>
          <CustomButton isContact >{buttonText}</CustomButton>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};
