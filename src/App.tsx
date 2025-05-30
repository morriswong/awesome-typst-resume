import { useState } from 'react'
import Editor from '@monaco-editor/react'
import * as Tabs from '@radix-ui/react-tabs'
import resumeContent from './resumeContent'

function App() {
  const [typstCode, setTypstCode] = useState(resumeContent)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Typst Resume Editor</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <Tabs.Root defaultValue="editor">
            <Tabs.List className="flex border-b border-gray-200">
              <Tabs.Trigger 
                value="editor"
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none"
              >
                Editor
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="preview"
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none"
              >
                Preview
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="editor" className="p-4">
              <Editor
                height="70vh"
                defaultLanguage="typst"
                value={typstCode}
                onChange={(value) => setTypstCode(value || '')}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </Tabs.Content>

            <Tabs.Content value="preview" className="p-4">
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