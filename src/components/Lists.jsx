import { useSelector, useDispatch } from "react-redux";
import { fetchLists } from "../features/fetchlists/urlListsSlice";

function Lists() {
  const dispatch = useDispatch();
  const urlLists = useSelector((state) => state.urlLists);

  console.log("State", urlLists);

  if (urlLists.isLoading) {
    return <h1 className="text-center text-white text-2xl">Loading...</h1>;
  }

  return (
    <div className="mt-28 px-20 -ml-28 flex flex-col justify-center items-center gap-16 ">
      <div>
        <h1 className="text-center text-white text-2xl -ml-6">
          All Enquiry Lists
        </h1>
      </div>
      <div>
        <button
          className="border border-transparent bg-blue-600 outline-none py-2 px-4 rounded-lg text-white hover:bg-blue-500 -ml-6"
          onClick={() => dispatch(fetchLists())}
        >
          Fetch Lists
        </button>
      </div>
      <div>
        {urlLists.data && (
          <ul>
            {urlLists.data.map((list) => (
              <li
                key={list.id}
                className="list-none mt-28 mx-20 px-10 py-6 bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg"
              >
                <h1 className="text-white text-2xl mb-2">
                  <span className="font-bold">Name: </span>
                  {list.name}
                </h1>
                <h3 className="text-white text-xl mb-4">
                  <span className="font-bold">Email: </span>
                  {list.email}
                </h3>
                <p className="text-white text-lg">
                  <span className="font-bold">Message: </span>
                  <br />
                  {list.message}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Lists;
