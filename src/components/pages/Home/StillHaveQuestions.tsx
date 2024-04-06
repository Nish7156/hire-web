import { QuestionsSection } from "@/components/Utility/CommonComponent";
import * as React from "react";



const StillHaveQuestions: React.FC = () => {
  return (
    <div className="container">
      <QuestionsSection
        title="Still have questions?"
        description="Can't find the answer you're looking for? Please talk to our friendly team."
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/37847c10e84e0b9628421a782fedc5cc2c6de905bb98712b4d91d8d1a3c3c049?apiKey=8bb55e60ed164c3885dc3e2ec7400011&"
        buttonText="Contact Us"
      />
    </div>
  );
};

export default StillHaveQuestions;
