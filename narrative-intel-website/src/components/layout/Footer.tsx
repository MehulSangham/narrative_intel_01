import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Narrative Intelligence</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Building the semantic intelligence layer for organizations working at the edge of culture, policy, and systems transformation.
            </p>
            <p className="text-sm text-gray-500">
              In an age of contested truths, we help you map meaning, trace power, and intervene with precision.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/services#niq-audit" className="hover:text-black transition-colors">
                  nIQ Audit
                </Link>
              </li>
              <li>
                <Link href="/services#narrative-mapping" className="hover:text-black transition-colors">
                  Narrative Mapping
                </Link>
              </li>
              <li>
                <Link href="/services#building-capacity" className="hover:text-black transition-colors">
                  Building nIQ Capacity
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/signals" className="hover:text-black transition-colors">
                  Signals
                </Link>
              </li>
              <li>
                <Link href="/digest" className="hover:text-black transition-colors">
                  Weekly Digest
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition-colors">
                  About nIQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Narrative Intelligence. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}