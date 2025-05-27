export default function Section3() {
    return (
      <div className="bg-blue-300 p-4 rounded-lg h-full">
        <h2 className="font-semibold mb-2">#discuss</h2>
        <ul className="space-y-2 text-sm text-gray-800">
          <li>Meme Monday <span className="text-gray-500">(45 comments)</span></li>
          <li>Coding Without Armor <span className="text-gray-500">(2 comments)</span></li>
          <li>The Software Industry is "Cooked"! <span className="text-gray-500">(1 comment)</span></li>
          <li>Are AI Interview Tools actually helpful? <span className="text-yellow-500">New</span></li>
          <li>What's Your Go-To JavaScript Tool? <span className="text-gray-500">(3 comments)</span></li>
        </ul>
  
        <div className="mt-6">
          <h2 className="font-semibold mb-2">#watercooler</h2>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Meme Monday <span className="text-gray-500">(45 comments)</span></li>
            {/* …más threads… */}
          </ul>
        </div>
      </div>
    )
  }
  