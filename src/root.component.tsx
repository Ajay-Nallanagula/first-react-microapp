import { publicApiFunction, testApiFunction } from "utility-microapp";

export default function Root(props) {
  console.log(`First MFE ${JSON.stringify(props)}`);
  return (
    <section>
      <h2>{publicApiFunction()}</h2>
      <h2>{testApiFunction()}</h2>
      <h1>Root from first mfe mounted</h1>
    </section>
  );
}
