import Gold from "../component/Gold";
import News from "../component/News"
export default function Index() {
  return (
    <>
    <div>
      {/* News Section    */}
      <section>
        <h2 className="text-6xl font-bold text-center my-5 py-5"> <span className="text-blue-700">L</span>atset <span className="text-blue-700">N</span>ews</h2>
        <News/>

      </section>


        {/* Gold Section */}
        <section>
        <h2 className="text-6xl font-bold text-center my-5 py-5"> <span className="text-blue-700">R</span>ecent <span className="text-blue-700">G</span>old </h2>
        <Gold/>
      

      </section>


    </div>
    
    
    </>
  )
}
