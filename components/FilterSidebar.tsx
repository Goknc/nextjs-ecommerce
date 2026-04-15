"use client"

export default function FilterSidebar({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {

  return (

    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-100 bg-white z-50 p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <button
          onClick={onClose}
          className="mb-4 text-xl"
        >
          ✕
        </button>

        {children}

      </div>
    </>
  )
}