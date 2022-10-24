import { useEffect, useState } from "react";
import Header from "/components/HeaderSchedule";
import ProfileBar from "/components/ProfileBar";
import Schedule from "/components/Schedule";

export default function schedule() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No table data</p>;

  // console.log("Data");
  // console.log(data);

  return (
    <div>
      <Header></Header>
      <ProfileBar></ProfileBar>
      <Schedule props={data} week={1}></Schedule>
    </div>
  );
}