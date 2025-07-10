import image from "@/assets/image2.jpg"

function ProfileImage() {
  return (
    <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-primary shadow-lg mx-auto">
      <img
        src={image} // Replace with your image path
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ProfileImage;