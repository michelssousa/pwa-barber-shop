//#region Imports
//import { useSession, signOut } from 'next-auth/react'
import type { NextPage } from 'next'
import * as M from '@components/index'
//#endregion

const Home: NextPage = () => {
  // const { data: session } = useSession()

  // const session = useRequireAuth();
  // if (!session) return <div>loading...</div>;

  return (
    <>
      <M.Wrapper>
        <M.Content>
          <M.ButtonCancel $full={true}>Test</M.ButtonCancel>
          <M.Spacer />
          <M.ButtonConfirm $full={true}>A</M.ButtonConfirm>
          <M.Spacer />
          <M.SearchBar />
        </M.Content>
        <M.Spacer />
        <M.ButtonFab>
          <M.Icons.Add />
        </M.ButtonFab>
      </M.Wrapper>
    </>
  )
}

export default Home

//import useRequireAuth from "../lib/useRequireAuth";

// <Container>
//
// <Center>
//   <div className="text-subtle">Center</div>
// </Center>
// <Row>
//   <Left className="bg-red-100">
//     <div className="text-subtle">Left</div>
//     <div className="text-subtle">Left</div>
//     <div className="text-subtle">Left</div>
//     <div className="text-subtle">Left</div>
//   </Left>
//   <Right className="bg-red-50">
//     <div className="text-subtle">Right</div>
//   </Right>
//   <Center className="bg-red-200">
//     <div className="text-subtle">Center</div>
//   </Center>
// </Row>
//   <Text $title={true} $large={true}>
//     Hello
//   </Text>
//   <Text $title={false} $large={false} $as={RedContainer}>
//     Hello, Im a Title rendered as a RedContainer, Polymorphism!
//   </Text>
//   <p className="text-lg leading-loose md:text-xl">Maybe we can live without libraries...</p>
//   <Button $primary={false}>michel</Button>
//   <Box color="grey">
//     <Row>
//       <BoxP>itessfdasdf</BoxP>
//       <BoxP>outro</BoxP>
//     </Row>
//   </Box>
// </Container>
// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }
// <!-- component -->
//
// <div className="bg-neutra w-full min-h-screen flex flex-col justify-center items-center p-4">
//   <h1>michel</h1>
//   <p className="text-lg leading-loose md:text-xl">Maybe we can live without libraries...</p>
// </div>
// <div class="bg-gray-200 w-full min-h-screen flex flex-col justify-center items-center p-4">
//   <div class="bg-white text-black w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
//     <div class="flex items-center justify-between">
//       <div class="flex items-center space-x-4">
//         <div class="rounded-full w-4 h-4 border border-purple-500"></div>
//         <div class="text-md font-bold">Investors Meeting</div>
//       </div>
//       <div class="flex items-center space-x-4">
//         <div class="cursor-pointer">
//           <img class="w-5 h-5 rounded-lg" src="https://i.pravatar.cc/300" />
//         </div>
//         <div class="text-gray-500 hover:text-gray-300 cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//           </svg>
//         </div>
//         <div class="text-gray-500 hover:text-gray-300 cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
//           </svg>
//         </div>
//       </div>
//     </div>
//     <div class="mt-4 text-gray-500 font-bold text-sm">
//       # TODO
//     </div>
//   </div>
// </div>
