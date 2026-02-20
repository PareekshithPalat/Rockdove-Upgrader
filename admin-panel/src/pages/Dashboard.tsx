
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Download, FileText, Image as ImageIcon, LogOut, RefreshCw } from 'lucide-react';

type Tab = 'contact' | 'rfq' | 'career';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<Tab>('contact');
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const secret = localStorage.getItem('admin_secret');

    useEffect(() => {
        if (!secret) {
            navigate('/');
            return;
        }
        fetchData();
    }, [activeTab, secret, navigate]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/admin?action=fetch_${activeTab}`, {
                headers: { Authorization: `Bearer ${secret}` }
            });
            if (response.data.success) {
                setData(response.data.data);
            }
        } catch (error: any) {
            console.error('Fetch error:', error);
            if (error.response?.status === 401) {
                localStorage.removeItem('admin_secret');
                navigate('/');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_secret');
        navigate('/');
    };

    const downloadCSV = () => {
        if (!data.length) return;

        const headers = Object.keys(data[0]).join(',');
        const rows = data.map(row =>
            Object.values(row).map(value => `"${String(value).replace(/"/g, '""')}"`).join(',')
        );
        const csv = [headers, ...rows].join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${activeTab}_submissions_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    const downloadFile = async (id: number, type: 'resume' | 'photo') => {
        try {
            const response = await axios.get(`/api/admin?action=download_file&id=${id}&type=${type}`, {
                headers: { Authorization: `Bearer ${secret}` },
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');
            a.href = url;
            // Try to get filename from content-disposition if possible, else default
            const disposition = response.headers['content-disposition'];
            let filename = `${type}_${id}`;
            if (disposition && disposition.indexOf('attachment') !== -1) {
                const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                const matches = filenameRegex.exec(disposition);
                if (matches != null && matches[1]) {
                    filename = matches[1].replace(/['"]/g, '');
                }
            }

            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download error:', error);
            alert('Failed to download file');
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString();
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Admin Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 rounded-md bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
                    >
                        <LogOut className="h-4 w-4" /> Logout
                    </button>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Controls */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Tabs */}
                    <div className="flex space-x-1 rounded-lg bg-gray-200 p-1">
                        {(['contact', 'rfq', 'career'] as Tab[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition-colors ${activeTab === tab
                                        ? 'bg-white text-blue-600 shadow'
                                        : 'text-gray-600 hover:bg-gray-300'
                                    }`}
                            >
                                {tab} Submissions
                            </button>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={fetchData}
                            className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 border border-gray-300"
                        >
                            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} /> None
                        </button>
                        <button
                            onClick={downloadCSV}
                            disabled={!data.length}
                            className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 disabled:opacity-50"
                        >
                            <Download className="h-4 w-4" /> Export CSV
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Date</th>

                                    {activeTab === 'contact' && (
                                        <>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Email</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Phone</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Message</th>
                                        </>
                                    )}

                                    {activeTab === 'rfq' && (
                                        <>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Part Number</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Condition</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Qty</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Description</th>
                                        </>
                                    )}

                                    {activeTab === 'career' && (
                                        <>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Position</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Email</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Resume</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Photo</th>
                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {loading ? (
                                    <tr>
                                        <td colSpan={10} className="px-6 py-10 text-center text-gray-500">
                                            Loading data...
                                        </td>
                                    </tr>
                                ) : data.length === 0 ? (
                                    <tr>
                                        <td colSpan={10} className="px-6 py-10 text-center text-gray-500">
                                            No submissions found.
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((row) => (
                                        <tr key={row.id} className="hover:bg-gray-50">
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">#{row.id}</td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{formatDate(row.created_at)}</td>

                                            {activeTab === 'contact' && (
                                                <>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{row.name}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{row.email}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{row.phone}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={row.message}>{row.message}</td>
                                                </>
                                            )}

                                            {activeTab === 'rfq' && (
                                                <>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{row.part_number}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{row.condition_code}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{row.quantity}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={row.description}>{row.description}</td>
                                                </>
                                            )}

                                            {activeTab === 'career' && (
                                                <>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{row.name}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{row.position} ({row.job_type})</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{row.email}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                        {row.resume_filename ? (
                                                            <button
                                                                onClick={() => downloadFile(row.id, 'resume')}
                                                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                                            >
                                                                <FileText className="h-4 w-4" /> Download
                                                            </button>
                                                        ) : <span className="text-gray-400">N/A</span>}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                        {row.photo_filename ? (
                                                            <button
                                                                onClick={() => downloadFile(row.id, 'photo')}
                                                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                                            >
                                                                <ImageIcon className="h-4 w-4" /> Download
                                                            </button>
                                                        ) : <span className="text-gray-400">N/A</span>}
                                                    </td>
                                                </>
                                            )}
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
