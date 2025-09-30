import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function FakeStore() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const itemsReq = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://fakestoreapi.com/products');  
      setData(response.data);
      
    } catch (err) {
        setError("خطا در گرفتن اطلاعات");
    } finally {
        setIsLoading(false);
    }
}, []);

useEffect(() => {
      console.log(data);
    itemsReq();
  }, [itemsReq]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fakestorapi</h1>
    </div>
  );
}
