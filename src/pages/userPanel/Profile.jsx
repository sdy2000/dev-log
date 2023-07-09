const Profile = () => {
  return (
  <div>
    <form action="" className="">
      <div className="flex justify-between m-4 ">
      <label htmlFor="" className="text-lfp dark:text-dfp uppercase">Name</label>
      <input type="text" name="user-name" id="user-name"  className="rounded-lg text-lfs"/>
      </div>
      <div className="flex justify-between m-4 ">
      <label htmlFor="" className="text-lfp dark:text-dfp uppercase">Mail</label>
      <input type="email" name="user-mail" id="user-mail"  className="rounded-lg text-lfs"/>
      </div>
      <div className="flex justify-between m-4 ">
      <label htmlFor="" className="text-lfp dark:text-dfp uppercase">Phone</label>
      <input type="number" name="user-phone" id="user-phone"  className="rounded-lg text-lfs" maxLength={12} minLength={0}/>
      </div>
      <div className="flex flex-row m-4">
      <p  className="text-lfp dark:text-dfp uppercase">sex </p>
      <div className="flex justify-end gap-4 w-[100%]">
        <div>
        <label htmlFor="sex-male" className="text-xl">Male</label>
        <input type="radio" name="sex"  id="sex-male"  className="rounded-lg text-lfs w-4 h-4 mx-1 "/>
        </div>
      <div>
      <label htmlFor="sex-female" className="text-xl">Female</label>
      <input type="radio" name="sex" id="sex-female"  className="rounded-lg text-lfs w-4 h-4 mx-1"/>
      </div>
      <div>
      <label htmlFor="sex-women" className="text-xl">Prefer To Not Say</label>
      <input type="radio" name="sex" id="sex-women"  className="rounded-lg text-lfs w-4 h-4 mx-1"/>
      </div>
      </div>
      </div>
      <div>

      </div>
    </form>
  </div>
  );
};
export default Profile;
