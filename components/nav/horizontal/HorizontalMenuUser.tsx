import { auth, signOut } from "@/auth";

const HorizontalMenuUser = async () => {
  const session = await auth();
  return (
    <>
      {session ? (
        <form
          onSubmit={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className="btn btn-primary btn-wave label-btn label-end"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-custom-class="tooltip-light"
            title={`Sign out ${session.user?.email}`}
          >
            Sign Out
            <i className="ri-logout-box-r-line align-middle label-btn-icon bg-primary" />
          </button>
        </form>
      ) : (
        <>
          {/* <button
            type="button"
            className="btn btn-primary label-btn label-end"
            data-bs-toggle="modal"
            data-bs-target="#signin"
          >
            Sign In
            <i className="ri-shield-user-line align-middle label-btn-icon bg-primary" />
          </button> */}
          <button
            type="button"
            className="btn btn-primary label-btn label-end"
            // data-bs-toggle="modal"
            // data-bs-target="#signin"
          >
            Register
            <i className="ri-account-box-line align-middle label-btn-icon bg-primary" />
          </button>
        </>
      )}
    </>
  );
};

export default HorizontalMenuUser;
