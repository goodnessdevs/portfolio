import image from "@/assets/avatarImage.jpg";

export default function NavAvatar() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 rounded-full overflow-hidden border-1 border-primary shadow-lg mx-auto">
        <img src={image} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-xl font-semibold">Goodness O.</h2>
    </div>
  );
}
