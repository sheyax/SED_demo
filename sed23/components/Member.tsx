type Props = {};
export default function Member({ name, role, summary, imgUrl }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="h-32 w-32 rounded-full object-cover"
      />

      <div className="flex flex-col items-center w-3/5 xl:w-[200px]">
        <h3 className="text-bold text-xl uppercase">Jane Doe</h3>
        <h3>CEO</h3>
        <p className="text-xs text-center">
          {" "}
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur,
        </p>
      </div>
    </div>
  );
}
