const Filter = ({ filter, hanldeNewFilter }) => {
   return (
      <div>
         <form>
            <div>
               filter shown with{" "}
               <input value={filter} onChange={hanldeNewFilter} />
            </div>
         </form>
      </div>
   );
};

export default Filter;
