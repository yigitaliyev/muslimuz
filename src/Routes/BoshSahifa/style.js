import styled from "styled-components";

export const Wrapper = styled.div`
      
   display: flex;
   gap: 10px;
   margin:20px ;

      h1{
         text-align: center;
      }
   .data_box{
      gap: 20px;
      
      h5, p{
         font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }
      .box{
         display:flex;
         border: 1px solid red;  
      }
   }
   .maqolalar{
      width: 50%;
   }
   .yangiliklar{
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      width: 25%;
      background-color: white;
   }
   .xadislar{
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      width: 25%;
      background-color: white;
   }
`;