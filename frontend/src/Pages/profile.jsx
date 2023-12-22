import React, { useEffect } from "react";

const Profile = ({ onSuccess, onFailure }) => {
  useEffect(() => {
    // Инициализация библиотеки Google Sign-In
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "532067354506-9jd3ii0f4nm631u8qteltg8j5otbtjmh.apps.googleusercontent.com",
      });
    });
  }, []);

  const handleSignInClick = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(
      (googleUser) => {
        const profile = googleUser.getBasicProfile();
        const user = {
          id: profile.getId(),
          name: profile.getName(),
          email: profile.getEmail(),
          // Другие данные, которые вам могут быть нужны
        };
        onSuccess(user);
      },
      (error) => {
        onFailure(error);
      }
    );
  };

  return <button onClick={handleSignInClick}>Войти через Google</button>;
};

export default Profile;
