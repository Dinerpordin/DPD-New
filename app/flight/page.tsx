export default function FlightPage(){
  return (
    <div className="grid gap-4">
      <h1 className="text-lg font-bold">Flight Search</h1>
      <p className="opacity-80">Simple embedded widget. Replace with your affiliate widget when ready.</p>
      <div className="rounded-2xl border overflow-hidden bg-white">
        <iframe title="Flight" src="https://www.travelpayouts.com/widgets/7ce2e6c7b98e6e7fcb9a.html" width="100%" height="720" />
      </div>
    </div>
  );
}
