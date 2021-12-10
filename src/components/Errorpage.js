
import Menubar from "../components/Menubar"
export default Errorpage;
function Errorpage() {
   return (
      <div>

         <Menubar />
         <div id="texterror">
            <div class="alert alert-danger" role="alert" style={{ textAlign: "center" }}>
               <p>คุณยังไม่สามารถทำรายการนี้ได้ กรุณาติดต่อผู้ดูแล</p>
            </div>
         </div>

      </div>
   );

}