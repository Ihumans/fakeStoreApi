import { useState } from "react";

export default function FakeStore() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">
        Fakestorapi
    </h1>
  </div>
  )
}
