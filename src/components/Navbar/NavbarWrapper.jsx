import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
export default withRouter;











// import { useLocation } from "react-router-dom";
// import Navbar from "./Navbar";

// const withLocation = Component => props => {
//     const location = useLocation();
  
//     return <Component {...props} location={location} />;
//   };


// export default withLocation( Navbar)