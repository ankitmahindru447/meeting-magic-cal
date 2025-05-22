
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ConnectCard from "@/components/ConnectCard";
import CalendarEmbed from "@/components/CalendarEmbed";

const BookingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header email="ankit@getsoma.ai" />
      
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-10 md:px-0">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7H19M9 11H15M9 15H15M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold">Connect a data source to analyze ad insights</h1>
          <p className="text-gray-500 mt-2">Choose an ad platform to analyze ad performance</p>
        </div>

        <div className="space-y-2">
          <ConnectCard 
            icon={
              <div className="flex items-center justify-center w-8 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C12.791 2 11 3.791 11 6V8H6C4.895 8 4 8.895 4 10V21C4 22.105 4.895 23 6 23H17C18.105 23 19 22.105 19 21V10C19 8.895 18.105 8 17 8H13V6C13 4.895 13.895 4 15 4H18C19.105 4 20 3.105 20 2C20 0.895 19.105 0 18 0" fill="#1877F2"/>
                </svg>
              </div>
            }
            name="Meta"
          />
          
          <ConnectCard 
            icon={
              <div className="flex items-center justify-center w-8 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 6.5C22.5 8.433 20.933 10 19 10C17.067 10 15.5 8.433 15.5 6.5C15.5 4.567 17.067 3 19 3C20.933 3 22.5 4.567 22.5 6.5Z" fill="#00F2EA"/>
                  <path d="M15.5 11.17V17.5C15.5 19.433 13.933 21 12 21C10.067 21 8.5 19.433 8.5 17.5C8.5 15.567 10.067 14 12 14C12.5 14 12.97 14.1 13.39 14.29V11.023C13.27 11.023 13.14 11 13 11H12V8H15.5V11.17Z" fill="black"/>
                </svg>
              </div>
            }
            name="TikTok"
          />
          
          <ConnectCard 
            icon={
              <div className="flex items-center justify-center w-8 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.7609 7.20005C23.7609 7.20005 23.5266 5.54536 22.8047 4.82007C21.8906 3.86548 20.8688 3.85991 20.4 3.80548C17.04 3.6 12.0047 3.6 12.0047 3.6H11.9953C11.9953 3.6 6.96 3.6 3.6 3.80548C3.13125 3.85991 2.10938 3.86548 1.19531 4.82007C0.473438 5.54536 0.24375 7.20005 0.24375 7.20005C0.24375 7.20005 0 9.14527 0 11.0855V12.9047C0 14.8499 0.239062 16.7951 0.239062 16.7951C0.239062 16.7951 0.473437 18.4498 1.19062 19.1751C2.10469 20.1297 3.30469 20.0959 3.84375 20.1955C5.76562 20.3748 12 20.4 12 20.4C12 20.4 17.04 20.3904 20.4 20.1899C20.8688 20.1355 21.8906 20.1299 22.8047 19.1753C23.5266 18.45 23.7609 16.7953 23.7609 16.7953C23.7609 16.7953 24 14.8551 24 12.9049V11.0857C24 9.14055 23.7609 7.20005 23.7609 7.20005ZM9.52031 15.1258V7.97532L16.0031 11.5603L9.52031 15.1258Z" fill="#FF0000"/>
                </svg>
              </div>
            }
            name="Youtube"
          />
        </div>
        
        <div className="text-center mt-10 pt-6 border-t">
          <p className="text-gray-500 mb-2">Not ready to connect a data source?</p>
          <div className="flex flex-wrap justify-center gap-1 text-indigo-600">
            <Button variant="link" className="text-indigo-600 h-auto p-0">Book an onboarding call</Button>
            <span className="text-gray-500">or</span>
            <Button variant="link" className="text-indigo-600 h-auto p-0">explore Creative Research</Button>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t">
          <h2 className="text-xl font-bold mb-6 text-center">Book a Meeting</h2>
          <CalendarEmbed />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
