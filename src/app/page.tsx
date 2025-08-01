'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              楚门映像
            </div>

            {/* 桌面端导航 */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                首页
              </a>
              <a
                href="#videos"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                作品集
              </a>
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                关于我
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                联系我
              </a>
            </div>

            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* 移动端导航菜单 */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <div className="px-4 py-2 space-y-1">
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  首页
                </a>
                <a
                  href="#videos"
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  作品集
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  关于我
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  联系我
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 英雄区域 */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <Image
                className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5"
                src="/avatar.jpg"
                alt="楚门映像"
                width={192}
                height={192}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              你好，我是
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                楚门映像
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              用镜头记录真实世界的视频博主，在
              YouTube、B站、抖音等平台分享生活的美好瞬间
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://youtube.com/@trumanimp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                <span>🎥</span> YouTube
              </a>
              <a
                href="https://space.bilibili.com/trumanimp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                <span>📺</span> B站
              </a>
              <a
                href="https://www.douyin.com/user/trumanimp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                <span>🎵</span> 抖音
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 精选视频作品 */}
      <section id="videos" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              精选作品
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              这里是我最受欢迎的一些视频内容
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 视频卡片 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-4xl">▶️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  视频标题 1
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  这里是视频的简要描述，介绍视频的主要内容和亮点...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">100万 观看</span>
                  <span className="text-sm text-blue-500">YouTube</span>
                </div>
              </div>
            </div>

            {/* 视频卡片 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center">
                <span className="text-white text-4xl">▶️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  视频标题 2
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  这里是视频的简要描述，介绍视频的主要内容和亮点...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">50万 观看</span>
                  <span className="text-sm text-pink-500">B站</span>
                </div>
              </div>
            </div>

            {/* 视频卡片 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-4xl">▶️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  视频标题 3
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  这里是视频的简要描述，介绍视频的主要内容和亮点...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">80万 观看</span>
                  <span className="text-sm text-gray-800">抖音</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我 */}
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                关于我
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-8xl">🎬</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  楚门的影像世界
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  我是楚门映像，一位用镜头记录真实世界的视频创作者。就像《楚门的世界》中主角对真实的追求一样，
                  我致力于用最真诚的视角，记录生活中每一个珍贵的瞬间。
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  从日常生活的点点滴滴，到旅行路上的风景人文，从美食探索到情感思考，
                  每一帧画面都承载着真实的情感和故事。我相信，最好的内容源于最真实的生活。
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">
                      100万+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      总观看量
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">
                      50万+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      粉丝数量
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我 */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              联系我
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              欢迎商务合作或者交流创作心得
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:contact@trumanimp.com"
                className="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    邮箱
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    contact@trumanimp.com
                  </p>
                </div>
              </a>

              <a
                href="https://weibo.com/trumanimp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎭</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    微博
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">@楚门映像</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 楚门映像. 保留所有权利.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                隐私政策
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                使用条款
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
