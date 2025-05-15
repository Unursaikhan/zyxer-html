export const HeaderSignedOut = () => {
  return (
    <div className="bg-[#18181B] w-[1440px] h-[68px] px-22 flex items-center justify-between">
      <div className="flex gap-x-4 items-center">
        <img
          src="Screenshot 2024-12-17 at 18.02.18 1 (Traced).png"
          alt=""
          className="h-[37px]"
        />
        <div>
          <div className="flex font-semibold text-[20px] text-white">
            Nom<p className="text-[#EF4444]">Nom</p>
          </div>
          <div className="text-white">Swift delivery</div>
        </div>
      </div>
      <div className="flex gap-[14px]">
        <img src="user.png" alt="" />
      </div>
    </div>
  );
};
