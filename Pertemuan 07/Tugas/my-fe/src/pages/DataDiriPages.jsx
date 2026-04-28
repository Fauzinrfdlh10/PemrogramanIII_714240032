export default function DataDiriPage() {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">Data Diri</h2>

      <div className="rounded-lg border bg-slate-50 p-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-3xl font-bold text-white shadow-lg">
            👤
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-800">Mochammad Fauzi Nur Fadilah</h3>
            <p className="text-sm text-slate-500">D4 Teknik Informatika</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">NPM</p>
          <p className="mt-1 text-sm font-medium text-slate-700">714240032</p>
        </div>

        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Kelas</p>
          <p className="mt-1 text-sm font-medium text-slate-700">D4 TI 2C</p>
        </div>

        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</p>
          <p className="mt-1 text-sm font-medium text-slate-700">mahasiswa@politeknik.ac.id</p>
        </div>

        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Semester</p>
          <p className="mt-1 text-sm font-medium text-slate-700">Semester 4</p>
        </div>

        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Program Studi</p>
          <p className="mt-1 text-sm font-medium text-slate-700">D4 Teknik Informatika</p>
        </div>

        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Mata Kuliah</p>
          <p className="mt-1 text-sm font-medium text-slate-700">Pemrograman III - Web Service</p>
        </div>
      </div>

      <div className="rounded-lg border p-4">
        <h3 className="mb-2 text-sm font-semibold uppercase text-slate-500">
          Tentang
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          Halaman ini menampilkan informasi data diri mahasiswa. 
          Halaman ini merupakan bagian dari Latihan Mandiri Pertemuan 7, 
          yaitu menambahkan menu baru "Data Diri" di sidebar dan membuat halaman statis untuk menu tersebut.
        </p>
      </div>
    </div>
  );
}
