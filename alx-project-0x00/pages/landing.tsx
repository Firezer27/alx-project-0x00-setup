import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-4">
        Explore Amazing Stays
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Discover villas, apartments, and unique homes worldwide
      </p>

      {/* Button Showcase */}
      <div className="flex flex-col items-center gap-8 mb-16">
        <h2 className="text-2xl font-semibold">Button Component Demo</h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button title="Small Rounded" size="small" shape="rounded-sm" />
          <Button title="Medium Default" size="medium" />
          <Button title="Large Full" size="large" shape="rounded-full" />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button title="Primary (Default)" />
          <Button title="Secondary" variant="secondary" shape="rounded-full" />
          <Button title="Outline Style" variant="outline" size="large" />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            title="Small + Full"
            size="small"
            shape="rounded-full"
            variant="secondary"
          />
          <Button
            title="Large + Outline"
            size="large"
            variant="outline"
            shape="rounded-sm"
          />
        </div>
      </div>

      {/* Property Cards Grid */}
      <h2 className="text-2xl font-semibold text-center mb-8">
        Featured Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
