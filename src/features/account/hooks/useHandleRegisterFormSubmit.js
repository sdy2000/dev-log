import { useNavigate } from "react-router-dom";
import { ENDPOINTS, createAPIEndpoint } from "../../../service/api";

export default function useHandleRegisterFormSubmit(e) {
  const navigate = useNavigate();

  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const register = Object.fromEntries(formData);

  createAPIEndpoint(ENDPOINTS.register)
    .post(register)
    .then((res) => {
      navigate("/");
    })
    .catch((err) => console.log(err));
}
