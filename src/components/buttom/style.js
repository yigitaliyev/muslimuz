import styled from "styled-components";


export const  Wrapper = styled.div`
         width: 100%;
         height: 200px;
         background-color: white;
         box-shadow: rgba(0, 0, 0, 1) 0px 10px 20px, rgba(0, 0, 0, 1) 0px 6px 6px;
         display: grid;
         grid-template-columns: 1fr 1fr 1fr;
         gap: 10px;
         h2{
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
         }
         img{
            width: 40px;
            height: 40px;
         }
         div{
            /* background-color: red; */
            text-align: center;
         }
         
`;