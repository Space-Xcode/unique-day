
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dashboard-primary to-dashboard-secondary">
      <div className="max-w-lg text-center p-6 rounded-xl bg-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-dashboard-primary">Insight Visual Command Center</h1>
        <p className="text-xl text-gray-600 mb-8">
          A powerful dashboard for visualizing your data and making informed decisions.
        </p>
        <Button 
          size="lg"
          onClick={() => navigate('/dashboard')}
          className="bg-dashboard-primary hover:bg-dashboard-primary/90"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Index;
