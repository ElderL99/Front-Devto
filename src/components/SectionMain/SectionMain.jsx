export default function SectionMain() {
    return (
      <div className="bg-white p-4 rounded-lg">
        {/* Hero */}
        
  
        {/* Filters */}
        <div className="mt-6">
          <div className="mb-4 flex gap-2">
            {['Relevant', 'Latest', 'Top'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100"
              >
                {filter}
              </button>
            ))}
          </div>
          {/* Aquí iría tu lista de posts */}
          <div>{/* <PostList posts={posts} /> */}</div>
        </div>
  
        {/* Footer tags / social */}
        <div className="mt-6 space-y-2">
          <div>
            <h2 className="font-medium">Redes Sociales</h2>
            {/* íconos o links */}
          </div>
          <div>
            <h2 className="font-medium">POPULARTAGS</h2>
            {/* tags dinámicos */}
          </div>
        </div>
      </div>
    )
  }
  