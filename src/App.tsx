import { useState } from 'react'
import Editor from '@monaco-editor/react'
import * as Tabs from '@radix-ui/react-tabs'
import resumeContent from './resumeContent'

function App() {
  const [typstCode, setTypstCode] = useState(resumeContent)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Typst Resume Editor</h1>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <Tabs.Root defaultValue="editor">
            <Tabs.List className="flex border-b border-gray-200">
              <Tabs.Trigger 
                value="editor"
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 focus:outline-none data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
              >
                Editor
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="preview"
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 focus:outline-none data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
              >
                Preview
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="editor" className="p-4 h-[80vh]">
              <Editor
                height="100%"
                defaultLanguage="typst"
                value={typstCode}
                onChange={(value) => setTypstCode(value || '')}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  padding: { top: 16, bottom: 16 },
                }}
              />
            </Tabs.Content>

            <Tabs.Content value="preview" className="p-4 h-[80vh]">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Preview coming soon...</p>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </main>
    </div>
  )
}

export default App