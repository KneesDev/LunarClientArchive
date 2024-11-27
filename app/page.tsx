import Image from 'next/image';
import Card from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Icon from '@mdi/react';
import { mdiMicrosoft, mdiApple, mdiLinux, mdiAlert } from '@mdi/js';

import { releases } from '@/releases';

export default function Home() {
  const generateDownload = (version: string, platform: 'windows' | 'linux' | 'mac') => {
    switch (platform) {
      case 'windows':
        return `https://launcherupdates.lunarclientcdn.com/Lunar%20Client%20v${version}.exe`;
      case 'linux':
        return `https://launcherupdates.lunarclientcdn.com/Lunar%20Client-${version}.AppImage`;
      case 'mac':
        return `https://launcherupdates.lunarclientcdn.com/Lunar%20Client%20v${version}.dmg`;
      default:
        return '#';
    }
  };

  return (
    <>
      <div className="space-y-4">
        <h1 className="font-display text-2xl">Launcher</h1>
        <Card className="w-full p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Version</TableHead>
                <TableHead className="text-right">Downloads</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...releases.launcher.versions, ...releases.launcher.legacy.versions].map((version) => {
                const isLegacy = releases.launcher.legacy.versions.includes(version);
                const linuxAvailable = version !== '2.0.2'; // 2.0.2 AppImage isn't available in the CDN

                return (
                  <TableRow key={version}>
                    <TableCell className="flex items-center space-x-2">
                      <Image
                        src={isLegacy ? '/assets/icon/legacy.png' : '/assets/icon/new.png'}
                        alt=''
                        draggable={false}
                        width={24}
                        height={24}
                      />
                      <span className="font-medium">{version}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="space-x-2">
                        <a
                          href={generateDownload(version, 'windows')}
                          className="text-muted-foreground transition-colors duration-150 hover:text-neutral-600"
                          target="_blank"
                          title="Windows"
                          rel="noopener noreferrer"
                        >
                          <Icon path={mdiMicrosoft} className="w-6 h-6 inline-block" />
                        </a>
                        <a
                          href={generateDownload(version, 'mac')}
                          className="text-muted-foreground transition-colors duration-150 hover:text-neutral-600"
                          target="_blank"
                          title="macOS"
                          rel="noopener noreferrer"
                        >
                          <Icon path={mdiApple} className="w-6 h-6 inline-block" />
                        </a>
                        {linuxAvailable ? (
                          <a
                            href={generateDownload(version, 'linux')}
                            className="text-muted-foreground transition-colors duration-150 hover:text-neutral-600"
                            target="_blank"
                            title="Linux"
                            rel="noopener noreferrer"
                          >
                            <Icon path={mdiLinux} className="w-6 h-6 inline-block" />
                          </a>
                        ) : (
                          <a
                            className="text-red-500 transition-colors duration-150 hover:text-red-600 cursor-pointer"
                            title="Linux download is unavailable"
                          >
                            <Icon path={mdiAlert} className="w-6 h-6 inline-block" />
                          </a>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      </div>
    </>
  );
}