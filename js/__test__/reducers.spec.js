import reducers from "../../reducers";

test("reducers", () => {
  let state;
  state = reducers(
    { searchTerm: "th" },
    { type: "SET_SEARCH_TERM", payload: "the" }
  );
  expect(state).toEqual({ searchTerm: "the" });
});

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({ searchTerm: "" });
});
