import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-8">Landing Page</h1>

      {/* Button instances with different sizes and shapes */}
      <div className="flex flex-wrap gap-6 mb-12 justify-center">
        <Button title="Small Button" styles="px-4 py-2 text-sm rounded-sm" />
        <Button title="Medium Button" styles="px-6 py-3 text-base rounded-md" />
        <Button title="Large Button" styles="px-8 py-4 text-lg rounded-full" />
        <Button title="Extra Large" styles="px-10 py-5 text-xl rounded-lg" />
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
