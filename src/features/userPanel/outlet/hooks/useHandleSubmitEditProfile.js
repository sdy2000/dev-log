// import { useDispatch, useSelector } from "react-redux";

import { ENDPOINTS, createAPIEndpoint } from "../../../../service/api";

export default function useHandleSubmitEditProfile(values, setError) {
  // const user = useSelector((store) => store.user);
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("user_avatar", values.user_avatar);
    // const editProfile = Object.fromEntries(formData);

    //TODO :Validate Information
    createAPIEndpoint(ENDPOINTS.user_edit)
      .post(formData)
      .then((res) => {
        //TODO :Validate Information && Update user store and
      });
  };

  return handleSubmit;

  // const validate = (data) => {};
}
