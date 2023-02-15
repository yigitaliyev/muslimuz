import styled from "styled-components";


export const Wrapper = styled.div`
     width: 100%;
     height: 100px;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    .top_container{  
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;

        .logo_container{
            display: flex;
            align-items: center;

            img{
               width: 50px;
               height: 50px;
               margin-right: 150px;
            }
            input{
               width: 500px;
               height: 40px;
               border-radius: 8px  0 0 8px;
               font-size: 20px;

               ::placeholder{
                font-size: 20px;
               }
            }
            button{
               width: 100px;
               height: 40px;
               border-radius: 0 8px 8px 0;
               font-size: 20px; 
            }
        }
        .login-container{
            button{
               height: 40px;
               width: 140px;
               margin: 0 20px;
               border-radius: 8px;
               font-size: 16px;
               color: #fff;
               background: #da3d9b;
            }
        }          
    }

   .line{
      width: 100%;
      height: 0.5px;
      border: 1px solid black;
    }

   .pages{
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 5px 20px;
        ul{
          display: flex;
          list-style: none;
        }
        ul li a {
          color: white;
          text-decoration: none;
          margin: 0 20px;
          color: black;
        }
        button{
          color: #fff;
          background-color: #28a745;
          border-color: #28a745;
          border-radius: 6px;
        }
    }
`;