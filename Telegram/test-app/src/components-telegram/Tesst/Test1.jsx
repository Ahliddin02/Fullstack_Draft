import Test2 from "../Tesst/Test2";
import Test3 from "../Tesst/Test3";
import Test4 from "../Tesst/Test4";
import { Routes, Route, Link } from "react-router-dom";

export default function Test1() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/2test"}>Test2</Link>
        </li>
        <li>
          <Link to={"/test3"}>Test3</Link>
        </li>
        <li>
          <Link to={"/test4"}>Test4</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/2test" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
        <Route path="/test4" element={<Test4 />} />
      </Routes>
    </div>
  );
}
