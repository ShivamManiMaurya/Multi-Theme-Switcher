const LoadingSpinner: React.FC = () => {
  return (
    <div className="text-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p>Loading products...</p>
    </div>
  );
};

export default LoadingSpinner;
