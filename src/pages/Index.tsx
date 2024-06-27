import Currency from "../component/Currency/Currency";
import Gold from "../component/Gold";

export default function Index() {
  return (
    <>
    <div>
      {/* News Section    */}
      {/* <section>
        <h2 className="text-4xl font-bold text-center my-2 py-2"> <span className="text-blue-700">L</span>atset <span className="text-blue-700">N</span>ews</h2>
        <News/>

      </section> */}

      {/* Currency Section */}
      <section>
        <h2 className="text-4xl font-bold text-center my-2 py-2"> <span className="text-blue-700">C</span>urrency </h2>
        <Currency/>
      </section>


        {/* Gold Section */}
        <section>
        <h2 className="text-4xl font-bold text-center my-2 py-2"> <span className="text-blue-700">R</span>ecent <span className="text-blue-700">G</span>old </h2>
        <Gold/>
      

      </section>


    </div>
    
    
    </>
  )
}
