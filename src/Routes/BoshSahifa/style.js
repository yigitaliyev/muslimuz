import styled from "styled-components";

export const Wrapper = styled.div`
      
   display: flex;
   gap: 10px;
   margin:20px ;
      h1{
         font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
         text-align: center;
      }
   .maqolalar{
      width: 50%;
      .container{
         padding: 8px 16px;
         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
         margin: 10px;
         font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }
      .box{
      display: flex;
      }
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